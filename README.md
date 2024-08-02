# Pokedex Projesi

Bu proje, API'den alınan Pokemon kart verilerini ekrana bastıran ve inputa girilen veriye göre filtreleme yapan basit bir Pokedex uygulamasıdır. Proje HTML, CSS ve JavaScript kullanılarak geliştirilmiştir.

## Özellikler

- Pokemon verilerini API'den çekme
- Pokemon kartlarını ekranda gösterme
- Input alanına girilen veriye göre Pokemonları filtreleme

## Ekran Görüntüsü
  [Ana Sayfa](desktop.gif)

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript

## Kurulum

1. Bu projeyi yerel makinenize klonlayın:
    ```bash
    git clone https://github.com/cengo14/javascript-pokedex-project
    ```

2. Proje dizinine gidin:
    ```bash
    cd javascript-pokedex-project
    ```

3. Gerekli dosyaları indirdikten sonra, projenin kök dizininde `index.html` dosyasını tarayıcıda açın.

## API Kullanımı

Bu proje için [PokeAPI](https://pokeapi.co/) kullanılmıştır. API, Pokemon verilerini JSON formatında sağlar ve bu veriler JavaScript kullanılarak işlenir.

## Kullanım

1. Sayfa yüklendiğinde, Pokemon verileri API'den çekilir ve kartlar ekranda gösterilir.
2. Arama kutusuna bir kelime girildiğinde, Pokemon isimleri bu kelimeye göre filtrelenir ve sadece eşleşen Pokemonlar ekranda gösterilir.

## Proje Yapısı

```markdown
pokedex-projesi/
│
├── index.html
├── styles.css
└── app.js
```

### `index.html`

HTML yapısını içerir. Arama kutusu ve kartların yerleştirileceği alan bu dosyada bulunur.

### `styles.css`

Kartların ve genel sayfa düzeninin stilini tanımlar.

### `app.js`

API'den veri çekme, kartları oluşturma ve filtreleme işlemlerini gerçekleştirir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir konu açın.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.


