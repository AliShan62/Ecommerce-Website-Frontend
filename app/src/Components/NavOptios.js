import React, { useState, useEffect } from 'react';
import NavCard from './NavCard';
import './NavOptios.css';

function NavOptios({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) {

  const [miphoneToggle, setmiphoneToggle] = useState(false);
  const [redmiphoneToggle, setredmiphoneToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);
  const [fitnessToggle, setfitnessToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);
  const [accessoriesToggle, setaccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/miphones') return setmiphoneToggle(true);
    if (window.location.pathname === '/redmiphones') return setredmiphoneToggle(true);
    if (window.location.pathname === '/tv') return settvToggle(true);
    if (window.location.pathname === '/laptops') return setlaptopToggle(true);
    if (window.location.pathname === '/lifestyle') return setfitnessToggle(true);
    if (window.location.pathname === '/home') return sethomeToggle(true);
    if (window.location.pathname === '/audio') return setaudioToggle(true);
    if (window.location.pathname === '/accessories') return setaccessoriesToggle(true);
  }, []);

  return (
    <div className="navoptios">
      {/* first */}
      {miphoneToggle && miPhones && miPhones.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* second */}
      {redmiphoneToggle &&
        redmiPhones &&
        redmiPhones.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* third */}
      {tvToggle &&
        tv &&
        tv.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* four */}
      {laptopToggle &&
        laptop &&
        laptop.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* five */}
      {fitnessToggle &&
        fitnessAndLifeStyle &&
        fitnessAndLifeStyle.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* six */}
      {homeToggle &&
        home &&
        home.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* seven */}
      {audioToggle &&
        audio &&
        audio.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}

      {/* eight */}
      {accessoriesToggle &&
        accessories &&
        accessories.map((item, index) => (
          <NavCard index={index} name={item.name} price={item.price} image={item.image} key={item.key} />
        ))}
    </div>
  );
}

export default NavOptios;
