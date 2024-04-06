import Header from "@/components/header";
import Footer from "@/components/footer";

const TourPage = ({ params: { tourId } }: { params: { tourId: string } }) => {
  return (
    <div className="min-h-dvh">
      <Header />
      <div className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem
        debitis distinctio dolore enim et explicabo facilis ipsum iure neque
        nesciunt, non quas rem repellendus, sed sequi ullam voluptas voluptatum.
      </div>
      <Footer />
    </div>
  );
};

export default TourPage;
