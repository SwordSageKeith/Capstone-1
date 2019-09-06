import React from "react";
function Character() {
  return (
    <main>
      <section className="notskills">
        <section className="info">
          <p>Name: xxxxxx</p>
          <p>Class: xxxxxx</p>
          <p>Race: xxxxxx</p>
          <p>Background: xxxxxx</p>
          <p>etc: xxxxxx</p>
        </section>

        <section className="stats">
          <p>STR: 18</p>
          <p>DEX: 18</p>
          <p>CON: 18</p>
          <p>WIS: 18</p>
          <p>INT: 18</p>
          <p>CHA: 18</p>
          <button>Generate stats</button>
        </section>

        <section className="hp">
          <p>HP: 15</p>
          <p>AC: 15</p>
          <p>BAB: 1</p>
          <p>REFLEX: 1</p>
          <p>FORTITUDE: 1</p>
          <p>CONSTITUTION: 1</p>
        </section>

        <section>
          <p>
            DESCRIPOYION DESCRIPOYION DESCRIPOYION DESCRIPOYION DESCRIPOYION
            DESCRIPOYION DESCRIPOYION DESCRIPOYION DESCRIPOYION DESCRIPOYION
            DESCRIPOYIO NDESCRIPOYIO NDESCRIPOYI ONDESCRIP OYION DESCRIPOYION
            DESCRIPOYION DESCRIPOYION DESCRIPOYION DESCRIPOYION DESCRIPOYION
            DESCRIPOYION DESCRIPOYIONDESCRIPOYION DESCRIPOYION DESCRIPOYION
          </p>
        </section>
      </section>

      <section className="skills">
        <p>xxxx: 15</p>
        <p>xxxx: 15</p>
        <p>xxxx: 1</p>
        <p>xxxx: 1</p>
        <p>xxxx: 1</p>
        <p>xxxx: 1</p>
      </section>
    </main>
  );
}

export default Character;
