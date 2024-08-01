import './GamingLibrary.css';

import {SectionHeader} from '../../components/index'
import { SectionWrapper ,GamingLibraryCard} from '../../components/index';
import  GameData  from '../../Data/GamingLibraryData';

 
function GaminLibrary(props) {

    const games = GameData.map(game => (
        <GamingLibraryCard
          key={game.id} // Ensure each component has a unique key when rendering arrays of components
          
          title={game.title}
          category={game.category}
          date_added={game.dateAdded}
          hours_played={game.hoursPlayed}
          rate={game.rate} // Assuming your GamingLibraryCard component expects a prop named rate
          download={game.currently} // Assuming your GamingLibraryCard component expects a prop named download
          image={game.image}
        />
      ));
  return (
    <>
    <SectionWrapper>

<SectionHeader>Gaming Library</SectionHeader>
<div className="gaming-library-cards"  >

 {games} 
 








 










</div>

</SectionWrapper>

    
      
    
    </>
  );
}

export default GaminLibrary;