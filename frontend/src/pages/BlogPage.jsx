import BlogHero from "../components/BlogHero";
import BlogFilters from "../components/BlogFilters";
import BlogGrid from "../components/BlogGrid";
import NewsletterCTA from "../components/NewsletterCTA";
import SessionCTA from "../components/SessionCTA";

const BlogPage = () => {
  return (
    <main className="bg-[#f8f6f2] min-h-screen">

      <BlogHero />

      <BlogFilters />

      {/* <BlogGrid /> */}

      <NewsletterCTA />

      <SessionCTA />

    </main>
  );
};

export default BlogPage;