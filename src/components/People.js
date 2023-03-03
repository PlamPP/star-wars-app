import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";

export default function People({ data }) {
  // console.log(data);

  return (
    <>
      <h2>Peoples</h2>
      {/* <div class="ui segment"> </div> */}
      <Grid centered stackable columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color="yellow">
                <Card.Content>
                  <Card.Header header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
                    <strong>Eye Color</strong>
                    <p>{people.eye_color}</p>
                    <strong>Homeworld</strong>
                    <p>{people.homeworld}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
