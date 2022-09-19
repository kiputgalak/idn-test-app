# IDN Test App

Website ini merupakan project yang dibangun untuk memenuhi test yang diselenggarakan oleh IDN Times

### Usage
Pengguna diharapkan dapat melakukan beberapa aksi berikut ini:
1. Melihat profile user
2. Melihat list berita / livestream / quiz dari user
3. Melihat detail berita

### Installation
1. Clone repositori
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Run Project
Anda dapat menjalankan project ini dengan melakukan:
1. Development mode
   ```sh
   npm run dev
   ```
2. Production mode
   ```sh
   npm run build
   ```
    ```sh
   npm run start
   ```
Buka  [http://localhost:3000](http://localhost:3000) dengan browser anda untuk melihat hasilnya.

### Folder Structure
    .
    ├── ...
    ├── src
    │   ├── components             # Reusable component
    │   ├── containers             # Komponen utama untuk halaman & komponen besar lainnya
    │   ├── context                # React context
    │   ├── utils                  # Fungsi - fungsi pembantu
    │   └── ...                    # etc.
    └── ...
