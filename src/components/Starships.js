import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function Starships({ data }) {
  return (
    <>
      <h2>Starships</h2>
      <Grid centered stackable columns={3}>
        {data.map((starships, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color='yellow'>
                <Card.Content>
                  <Card.Header> {starships.name}</Card.Header>
                  <Card.Description>
                    <strong>Official model name</strong>
                    <p>{starships.model }</p>
                    <strong>Starship class</strong>
                    <p>{starships.starship_class}</p>
                    <strong>Manufacturer </strong>
                    <p>{starships.manufacturer }</p>
                    <strong>Cost in galactic credits </strong>
                    <p>{starships.cost_in_credits}</p>
                    <strong>Hyperdrive rating </strong>
                    <p>{starships.hyperdrive_rating }</p>
                    <strong>Consumables</strong>
                    <p>{starships.consumables  }</p>
                    <strong>MGLT</strong>
                    <p>{starships.MGLT}</p>
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
