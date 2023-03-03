import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function Species({ data }) {
  return (
    <>
      <h2>Star Wars Species</h2>
      <Grid centered stackable columns={3}>
        {data.map((species, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color='yellow'>
                <Card.Content>
                  <Card.Header>{species.name}</Card.Header>
                  <Card.Description>
                    <strong>Classification</strong>
                    <p>{species.classification}</p>
                    <strong>Designation</strong>
                    <p>{species.designation}</p>
                    <strong>Manufacturer</strong>
                    <p>{species.manufacturer}</p>
                    <strong>Average height</strong>
                    <p>{species.average_height}</p>
                    <strong>Average lifespan in years</strong>
                    <p>{species.average_lifespan}</p>
                    <strong>Eye colors</strong>
                    <p>{species.eye_colors  }</p>
                    <strong>Hair colors</strong>
                    <p>{species.hair_colors}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  )
}
