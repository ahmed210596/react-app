import './MostPopulaire.css';
import { Card } from '../../components/index';

import {SectionHeader} from '../../components/index'
import { SectionWrapper } from '../../components/index';
import MostPopularData from '../../Data/MostPopularData';



function MostPopulaire() {

  
  const cards=MostPopularData.map(card=>{
   return <Card id={card.id} title={card.title} category={card.category} rate={card.rate} download={card.download} image={card.image} /> 

  })
  return (
    <>
    <SectionWrapper>

       <SectionHeader>Most popular</SectionHeader>
       <div className="most-popolar-items"  >

       {cards}
        



       

       


        










       </div>

    </SectionWrapper>
    
    
    </>
  );
}

export default MostPopulaire;