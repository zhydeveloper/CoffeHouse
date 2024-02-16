// toggle class untuk navbar
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#humburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active search
const searchFrom = document.querySelector('.search-from');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').onclick = (e) => {
    searchFrom.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};
// toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// penanganan klik diluar Elemen
document.addEventListener('click', function(e) {
    if (!document.querySelector('#humburger-menu').contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!document.querySelector('#search-button').contains(e.target) && !searchFrom.contains(e.target)) {
        searchFrom.classList.remove('active');
    } 
    if (!document.querySelector('#shopping-cart-button').contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active')
    }
});

document.addEventListener('alpine:init', ( ) => {
    Alpine.data('products',( ) => ({
      items: [
          {id: 1, name: 'Nescafe Gold', img: '1.jpg', price: 82000 },
          {id: 2, name: 'Robusta Toraja', img: '2.jpg', price: 46000 },
          {id: 3, name: 'Robusta Gayo', img: '3.jpg', price: 59000 },
          {id: 4, name: 'Robusta Bali', img: '4.jpg', price: 46000 },
          { id: 5, name: 'Arabica Gayo', img: '5.jpg', price: 32000 },
          { id: 6, name: 'Arbica Gayo Honey Process', img: '6.jpg', price: 26000 },
          { id: 7, name: 'Arabica Blend ', img: '7.jpg', price: 79000 },
          { id: 8, name: 'Arabica Tanjung ', img: '8.jpg', price: 40000 },
          { id: 9, name: 'Liberica GoldDib ', img: '9.jpg', price: 62000 },
          { id: 10, name: 'Liberica Liber.co ', img: '10.jpg', price: 23000 },
          { id: 11, name: 'Liberica Jambi ', img: '11.jpg', price: 67000 },
          { id: 12, name: 'Liberica Origin ', img: '12.jpg', price: 70000 },
          { id: 13, name: 'Excelsa Mix', img: '13.jpg', price: 34000 },
          { id: 14, name: 'Excelsa can', img: '14.jpg', price: 32000 },
          { id: 15, name: 'Excelsa Jyang ', img: '15.jpg', price: 37000 },
          { id: 16, name: 'Excelsa Medium ', img: '16.jpg', price: 106000 },
      ],
    }));
  
    Alpine.store('cart', {
      items: [],
      total: 0,
      quantity: 0,
      add(newItem) {
        // cek apakah ada barang yang sama dicart
        const cartItem = this.items.find((item) => item.id === newItem.id);
        //  jika belum ada/ cart kosong
      if(!cartItem) {
        this.items.push({...newItem, quantity: 1, total:newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang ada cek barang beda atau sama
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if(item.id !== newItem.id){
            return item;
          }
          else {
            // jika barang sudah ada tambah jumlah dan total 
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
      },
      remove(id) {
        // ambil item yang mau diremove
        const cartItem = this.items.find((item) => item.id === id );
        // jika item lebih dari 1  
        if(cartItem.quantity > 1) {
          // telusuri 1 1
          this.items = this.items.map((item) => {
            // jika bukan barang yang diklik
  
            if(item.id !== id) {
              return item;
            } else {
              item.quantity--;
              item.total = item.price * item.quantity;
              this.quantity--;
              this.total -= item.price;
              return item;
            }
          });
        } else if (cartItem.quantity === 1) {
          // jika barangnya sisa 1
          this.items = this.items.filter((item) => item.id !== id);
          this.quantity--;
          this.total -= cartItem.price;
        }
      }
    });
  });
  
  // form validasi 
  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.disabled = true;
  
  const form = document.querySelector('#checkout-from');
  
  form.addEventListener( 'keyup', function(){
    for ( let i = 0; i < form.elements.length; i++) {
      if(form.elements[i].value.length !== 0) {
        checkoutButton.classList.remove('disabled');
        checkoutButton.classList.add('disabled');
      } else {
        return false;
      }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
  });
  
  
  // kirim data ketika checkout diklik 
   checkoutButton.addEventListener('click', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    const message = formatMessage(objData);
    window.open('http://wa.me/628386802840?text=' + encodeURIComponent(message));
   });
  
  //  format pesan wa 
  const formatMessage = (obj) => {
    return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
    Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)})\n` )}
    TOTAL: ${rupiah(obj.total)}
    Terima Kasih`;
  };
  // konversi kerupiah
  
  const rupiah = (number) => {
      return new Intl.NumberFormat('id-ID',
      {
          style: "currency",
          currency: 'IDR',
          minimumFractionDigits: 0,
      }).format(number);
  };
  
  