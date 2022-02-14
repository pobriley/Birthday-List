import React from "react";

const List = ({ people }) => {
  //const people = props.people;
  return (
    <div>
      {/*loop*/}
      {people.map(person => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} year old</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default List;
