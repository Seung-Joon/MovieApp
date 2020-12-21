import React from "react";
import CertificationItem from "./components/CertificationItem";


function App() {
  return (
    <div>
      <CertificationItem 
        title = "Redhat Certificate System Administrator"
        content = "Redhat"
        certificationId="200-082-022"
        imageUrl = "https://media-exp1.licdn.com/dms/image/C4E0BAQEto-TydTTIfQ/company-logo_100_100/0/1556712048684?e=1616630400&v=beta&t=oT8JXHrJiVRSgRBLzhwhQYa6hN71xS7zdoP4eKVB9gE">
      </CertificationItem>
    </div>
    
  );
}

export default App;
