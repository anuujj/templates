import BasicCard from '../../components/BasicCard/BasicCard';
import gokarna from '../../assets/gokarna.jpg';
import gulmarg from '../../assets/gulmarg.jpg';
import gangtok from '../../assets/gangtok.jpg';
import goa from '../../assets/goa.jpg';

const BasicCardDoc = () => {
  return (
    <div className="m-12 grid grid-cols-4 gap-10">
      <BasicCard
        title="Gokarna, Karnataka"
        description="Where pristine beaches meet ancient temples. Immerse yourself in its serene beauty, from the tranquil sands of Om Beach to the spiritual aura of Mahabaleshwar Temple. "
        footer="From $20/night"
        backgroundImg={gokarna}
      />
      <BasicCard
        title="Gulmarg, Kashmir"
        description="Nestled in the Himalayas, this paradise offers world-class skiing, lush meadows. Gulmarg captivates with its timeless beauty, making every moment a picture-perfect memory."
        footer="From $30/night"
        backgroundImg={gulmarg}
      />
      <BasicCard
        title="Goa, Goa"
        description="Dive into azure waters, savor exquisite seafood, and explore rich Portuguese heritage. Perfect for beach lovers and party enthusiasts. Goa promises an exhilarating blend of relaxation, adventure, and culture."
        footer="From $25/night"
        backgroundImg={goa}
      />
      <BasicCard
        title="Gangtok, Sikkim"
        description="Wander through charming streets, marvel at stunning monasteries. Gangtok offers a mesmerizing blend of natural beauty and rich heritage, promising an unforgettable escape."
        footer="From $23/night"
        backgroundImg={gangtok}
      />
      <BasicCard
        title="Gulmarg, Karnataka"
        description="where pristine beaches meet ancient temples. Immerse yourself in its serene beauty, from the tranquil sands of Om Beach to the spiritual aura of Mahabaleshwar Temple. Perfect for soul-searchers and sun-seekers."
        footer="From $80/night"
        backgroundImg={gokarna}
      />
      <BasicCard
        title="Gokarna, Karnataka"
        description="where pristine beaches meet ancient temples. Immerse yourself in its serene beauty, from the tranquil sands of Om Beach to the spiritual aura of Mahabaleshwar Temple. Perfect for soul-searchers and sun-seekers."
        footer="From $80/night"
        backgroundImg={gokarna}
      />
    </div>
  );
};

export default BasicCardDoc;
