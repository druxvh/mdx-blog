import BlogSection from "@/components/BlogSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Subscription from "@/components/Subscription";

const HomePage = () => {

  return (
    <MaxWidthWrapper className="">
      <Subscription />
      <BlogSection />
    </MaxWidthWrapper>
  );
};

export default HomePage;
