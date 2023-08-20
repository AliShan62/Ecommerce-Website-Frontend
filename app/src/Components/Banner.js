import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src= "https://i02.appmifile.com/708_operator_in/10/05/2021/2b7fc56c3b3c44f4b11bd9bd2b255749.jpg" alt="First"
        />
        <Carousel.Caption>
        <h3>MI 11X</h3>
        <p>What makes the Mi 11X a huge disruptor is its price tag. It comes with what we call “crazy Xiaomi pricing</p>
        <p>TechPP</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/191_operator_in/10/05/2021/4ccd175347800225dd6b47eb35166e2e.jpg"
         alt="Second slide"
        />
        <Carousel.Caption>
                      <h3>MI 11X PRO</h3>
                      <p>It is easily the most affordable device with a Snapdragon 888 chip and a 108-megapixel camera in the market right now",</p>
                      <p>TechPP</p>
                     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/52_operator_in/15/03/2021/7f91bdb2f227f8bd679fa96ac2a9fc1f.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>REDMI NOTE 10 PRO MAX</h3>
          <p>
          The Redmi Note 10 Pro Max’s macro camera captures the tiniest piece of details to stitch together some very good images.
          </p>
          <p>India Today</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/107_operator_in/17/03/2021/fa9bab9cbad1629076b04a17a655559c.jpg"
         alt="four"
        />
        <Carousel.Caption>
          <h3>REDMI NOTE 10</h3>
          <p>The deep contrasts and the richness that AMOLED brings along add a much-needed dimension to the smartphone.</p>
          <p>TechPP</p>
        </Carousel.Caption>
      </Carousel.Item>
      

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/85_operator_in/11/01/2021/b7600815ae26854c451a39ee88431098.jpg"         
         alt="five"
        />
        <Carousel.Caption>
          <h3>MI 10I</h3>
          <p>The Mi 10i clicks authentic, true-to-life photos with an abundance of details in every shot.</p>
          <p>91Mobiles</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/108_operator_in/13/01/2021/3bfe5123ede27524d616f0bdaf43945a.jpg"        
         alt="six"
        />
        <Carousel.Caption>
          <h3>MI QLED TV 4K</h3>
          <p>Redefining Value for Premium TVs</p>
    
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/843_operator_in/28/12/2020/226c73c386cf35e47fa0079b3534085f.jpg"
                       
         alt="seven"
        />
        <Carousel.Caption>
          <h3>MI 10T PRO</h3>
          <p>Mi 10T Pro is a clear winner in the premium segment</p>
          <p>FoneArena</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/779_operator_in/28/12/2020/55bbda7ebbb47f674213dead3c0fefdf.jpg"               
         alt="eight"
        />
        <Carousel.Caption>
          <h3>REDMI 9 POWER</h3>
          <p>In under an hour, the phone was charged around 80 percent plus, which is more than enough battery for two days.</p>
          <p>Indian Express</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i01.appmifile.com/webfile/globalimg/in/cms/97E65ECC-E105-9A20-6BD7-8A3235104C57.jpg"
                              
         alt="eight"
        />
        <Carousel.Caption>
          <h3>MI SMART WATER PURIFIER</h3>
          <p>Mi Smart Water Purifier: The Epitome Of Minimalism</p>
          <p>Mr.Phone</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src= "https://i01.appmifile.com/webfile/globalimg/in/cms/40F52E34-A946-E8B3-29F2-BBE4A5C7BEEE.jpg"
               
                              
         alt="eight"
        />
        <Carousel.Caption>
          <h3>MI SOUNDBAR</h3>
          <p>We Looked Hard, But There Really Are no Faults.</p>
          <p>TechPP</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;