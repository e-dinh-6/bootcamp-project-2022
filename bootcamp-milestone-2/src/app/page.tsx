// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <div>
      <html>
        <head>
          <title>Emi's Website</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <nav class="navbar">
            <h1 class="logo">
              <a href="index.html">Emi Dinh</a>
            </h1>
            <ul class="nav-list">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="resume.html">Resume</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <main>
            <h1>Emi's Website</h1>
            <div class="about">
              <div class="about-image"></div>
              <div class="about-text">
                <p>
                  Hi! My name is Emi Dinh, I am from Sacramento, California. I
                  enjoy rock climbing, photography, and videography in my
                  freetime.
                </p>

                <p>
                  I am passionate about exploring computer science and
                  cybersecurity, dedicated to <strong>lifelong</strong> learning
                  and empowering others. My mission is to educate and inspire
                  individuals to navigate the digital world confidently and
                  safely, fostering a secure future where technology drives
                  positive change.
                </p>
              </div>
            </div>
          </main>
          <footer class="footer">
            © 2024 Emi Dinh | Thanks for visiting! Come back soon! 😊
          </footer>
        </body>
      </html>
    </div>
  );
}
