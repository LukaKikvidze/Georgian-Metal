# Angular ვებპროექტი

ეს არის Angular-ზე შექმნილი მრავალგვერდიანი ვებსაიტი, რომელიც მოიცავს ძირითად სტრუქტურულ კომპონენტებს, გვერდებსა და ვიდეო გალერეას.

---

## 🚀 პროექტის გაშვება

პროექტის ლოკალურად გასაშვებად:

1. დააინსტალე საჭირო პაკეტები:

npm install
ng serve //სერვერის გაშვება


For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

პროექტი იყენებს Angular მოდულებზე დაფუძნებულ არქიტექტურას. ყველა კომპონენტი განათავსებულია შესაბამის მოდულში.

🔹 ძირითადი კომპონენტები:
HeaderComponent – საიტის ზედა ნავიგაციის ზოლი

FooterComponent – საიტის ქვედა ნაწილი

📄 გვერდის კომპონენტები:
HomeComponent – მთავარი გვერდი

AboutComponent – ინფორმაცია ჩვენს შესახებ

CareerComponent – კარიერა

ContactComponent – კონტაქტი

GalleryComponent – გალერეა (შეიცავს ვიდეოებს)

PartnersComponent – პარტნიორები

PhotoComponent – ფოტო გალერეა

ProductsComponent – პროდუქტები

QualityComponent – ხარისხის პოლიტიკა

VideoComponent – ვიდეო გალერეა


## Additional Resources

VideoComponent შეიცავს MP4 ვიდეოების სია რომელსაც ჩატვირთავს გალერეის სახით.

videos = [
  { source: 'assets/gallery-video/C1627.MP4' },
  { source: 'assets/videos/sample2.mp4' },
  { source: 'assets/videos/sample3.mp4' }
];

⚠️ ვიდეო ფაილების შენიშვნა:
ვიდეო ფაილები არ არის ატვირთული Git რეპოზიტორიაში დიდი ზომის გამო.

ვიდეო ფაილების ჩასასმელად:
გთხოვთ ხელით განათავსოთ ვიდეო ფაილები შემდეგ ლოკაციებზე:

src/assets/gallery-video/C1627.MP4

src/assets/videos/sample2.mp4

src/assets/videos/sample3.mp4

🌐 როუტინგი
როუტინგი ხორციელდება app.routes.ts ფაილის მეშვეობით. თითოეული კომპონენტი განსაზღვრულია შესაბამის URL ბილიკზე.


ℹ️ დამატებითი ინფორმაცია
პროექტი აგებულია მხოლოდ მოდულებზე (standalone კომპონენტები არ გამოიყენება).

ყველაფერი სტრუქტურირებულია ლოგიკურად კომპონენტებსა და მოდულებში.
