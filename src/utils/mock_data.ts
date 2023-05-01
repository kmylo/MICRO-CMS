import { BlogData } from "../types";
import { randomDate, randomId } from ".";
import { bgHeroImg } from "./constants";

export const singlePost = {
  id: "1",
  slug: "post01--rich-content-with-mdx",
  title: "Lorem ipsum dolor sit amet",
  author: "kmylo",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sapien ac ipsum aliquet, vel elementum nulla consequat. Donec sed erat id ipsum vestibulum sollicitudin. Fusce aliquam sagittis lectus sit amet tincidunt. Donec eu est vel nisi bibendum auctor. Quisque semper, purus eu interdum mattis, justo nibh posuere elit, quis efficitur orci dolor eu justo.",
  createdAt: randomDate(),
  tags: ["react", "next", "photo"]
};

const blogData: BlogData = {
  logo: "https://example.com/logo.png",
  menuItems: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ],
  heroImage: "https://example.com/hero.png",
  contactInfo: {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890"
  },
  posts: [
    {
      id: randomId(),
      slug: "post01--rich-content-with-mdx",
      title: "Lorem ipsum dolor sit amet",
      author: "lao tsze",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis sapien ac ipsum aliquet, vel elementum nulla consequat. Donec sed erat id ipsum vestibulum sollicitudin. Fusce aliquam sagittis lectus sit amet tincidunt. Donec eu est vel nisi bibendum auctor. Quisque semper, purus eu interdum mattis, justo nibh posuere elit, quis efficitur orci dolor eu justo.
        <img loading="lazy" alt="that" class="img-gallery" src="${bgHeroImg}">
        `,
      createdAt: randomDate()
      // tags: ["react", "next", "photo"]
    },
    {
      id: randomId(),
      slug: "post02",
      title: "Proin eu augue vel nisi",
      content: `Proin eu augue vel nisi dictum lacinia eu vel metus. Praesent lobortis nulla ac eros porttitor, sed egestas orci vehicula. Nullam rutrum ornare nulla, non aliquet massa consequat non. Nullam id mi a erat congue fringilla. Nam vel mi leo. Fusce eget eros vel mauris tempor ornare ac nec sapien. Aliquam hendrerit malesuada feugiat. Aliquam eget turpis quis orci facilisis tempor.
        <img loading="lazy" alt="that" class="img-gallery" src="https://firebasestorage.googleapis.com/v0/b/patchallenge-c3f27.appspot.com/o/images%2F0%20(5).jfif?alt=media">
        `,
      createdAt: randomDate()
    },
    {
      id: randomId(),
      slug: "post03",
      title: "Section 1.10.33 Finibus Bonorum et Malorum",
      author: "Elon Musk",
      content: `Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
      <iframe width="560" height="315" src="https://www.youtube.com/embed/59IXY5IDrBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      
        `,
      createdAt: randomDate()
    },
    {
      id: randomId(),
      slug: "post04",
      title: "At vero eos et accusamus et",
      author: "H. Rackham",
      content:
        "Praesent lobortis nulla ac eros porttitor, sed egestas orci vehicula. Nullam rutrum ornare nulla, non aliquet massa consequat non. Nullam id mi a erat congue fringilla. Nam vel mi leo. Fusce eget eros vel mauris tempor ornare ac nec sapien. Aliquam hendrerit malesuada feugiat. Aliqua tempor ornare ac nec sapienm eget turpis quis orci facilisis tempor.",
      createdAt: randomDate()
    },
    {
      id: randomId(),
      slug: "post05",
      title: "Inner html",
      content: `<h3 style="margin-bottom: 10px" onclick="javascript:window.alert('hello')">HTML rich text post!</h3>
<img loading="lazy"  alt="that" class="img-gallery" src="https://i.ibb.co/BPnb6c2/episode-06.jpg">
<p style="font-size: 25px; color: red">Type HTML in the textarea below, and it will magically appear in the frame below.</p>
<div>
The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</div>
        `,
      createdAt: randomDate()
    }
    // ...
  ]
};

export default blogData;
