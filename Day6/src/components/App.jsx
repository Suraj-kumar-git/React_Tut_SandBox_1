import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Image from "./Image";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Image img="https://scontent.frpr1-1.fna.fbcdn.net/v/t39.30808-6/236473686_1126409444514669_3734919224375977255_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sTTUuCVqheMAX-v5ql9&_nc_ht=scontent.frpr1-1.fna&oh=00_AfDD814KgAYj7pYI1VlHeviJRVpBQxWTR4zfWw7FsUKAKg&oe=63AEEF6E"/>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
