import React from 'react';
import Fade from 'react-reveal/Fade';

const policiesHeader = `Policies and Contract`;

const policiesText = {
  details1: 
    `Please take a moment to read and understand our sales policy, the sale of any of 
    our rabbits will be covered by this sales policy.  Please read prior to purchase.  
    Thank You.`, 
  details2: 
    `The health of your rabbit is guaranteed on the day of sale as follows:`, 
  details3: 
    `There are no visible signs of disease, diarrhea, eye or nasal discharge, malocclusion, 
    infections, wounds, abscesses, broken bones or other deformities.  We guarantee 
    that the rabbit is healthy to the best of our knowledge at the time of sale.  
    We can not guarantee that the rabbit will not pick up an illness, ailment or 
    injury during it's lifetime.  We will not promise rabbits personality, 
    fertility, promise of wins or successful production.
    We can not guarantee what a Jr. will look like as a Sr. nor can we guarantee 
    how well a rabbit will place on the show table.  I do not and can not guarantee 
    that any rabbit purchased from me will win at a show or become a Grand Champion 
    as this is near impossible to predict.  I also can not guarantee any rabbit sold 
    will be a good breeder or a good mother, even if they have produced for me.
    We reserve all rights to stop a sale and or cancel at any time for any reason.  
    If we cancel a sale, this will be the ONLY time we will offer a refund of payments 
    that had been made previously.`, 
  details4: 
    `WE DO NOT SELL RABBITS UNDER THE AGE OF 8 WEEKS.`, 
  details5: 
    `All rabbits are sold on a first come first served basis.
    Once you have commit to purchasing a rabbit, a 50% NON-REFUNDABLE deposit is due 
    within five (5) days by PayPal or cash. `, 
  details6: 
    `After a deposit is received I will hold a rabbit on an agreed date of pickup   
    If the buyer does not show up or does not call us to change the date of pick up, 
    the rabbit or rabbits will be placed back up for sale.  NO REFUND, NO EXCEPTIONS.
    Total amount must be paid in full before taking possession of the rabbit.
    All rabbits sold must retain the prefix "La Belle"  on their name and ear tattoo must 
    remain the same.`, 
  details7: 
    `Once a rabbit leaves our hands and is transported by anyone other than us we have no 
    responsibility whatsoever if something happens to the rabbit in transport.`, 
  details8: 
    `You are fully responsible for checking the rabbit from head to toe at the time of 
    pick up.  If this is not done and later a problem is found, no replacements or 
    refunds will be made and the sale is final. Your rabbit will come with transition 
    feed, dewormed, and claws trimmed. The feed I use is Primeline Nutrition or Pen Pals 
    Show but you can feed them whatever you like. If something happens to the rabbit 
    like it gets sick or breaks a bone in my possession,  I will offer a refund for that 
    rabbit or you my choose a replacement for that rabbit if we have one or until we have 
    something you like.`, 
  details9: 
    `No other guarantee exist except as written here.  Buyer agrees this is a legal and 
    binding contract.`, 
}

function Policies(props) {

  return(
    <>
    <Fade>
      <div id="top" className="spacer" />
      <div className="div-info stitching drop-shadow">
        <h3>{policiesHeader}</h3>
        {
          Object.keys(policiesText).map(key => {
            return (
              <p key={key}>
                {policiesText[key]} 
              </p>
            );
          })
        }
        <p>{policiesText.details01}</p>
      </div>
    </Fade>
    </>
  );
}

export default Policies;
