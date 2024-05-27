import React, { useEffect } from "react";
import { useEntityStore } from "@/store/entityStore";
import {
  Entity,
  EntityType,
  People,
  Film,
  Planet,
  Starship,
  Species,
  Vehicle,
} from "@/types/entity.types";
import { mapStringToEntityType } from "@/utils/entityTypeMapper";

interface EntityDetailsProps {
  relativeUrl: string;
}

const EntityDetails: React.FC<EntityDetailsProps> = ({ relativeUrl }) => {
  const { singleEntity, loading, error, fetchSingleEntity } = useEntityStore();

  useEffect(() => {
    if (relativeUrl) fetchSingleEntity(relativeUrl);
  }, [relativeUrl, fetchSingleEntity]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const entityType = mapStringToEntityType(relativeUrl.split("/")[0]);

  if (!entityType) {
    return <div className="text-center text-red-500">Invalid entity type</div>;
  }

  const renderEntityDetails = (entity: Entity, entityType: EntityType) => {
    switch (entityType) {
      case EntityType.People: {
        const people = entity as People;
        return (
          <div>
            <p>
              <strong>Birth Year:</strong> {people.birth_year}
            </p>
            <p>
              <strong>Gender:</strong> {people.gender}
            </p>
            <p>
              <strong>Height:</strong> {people.height} cm
            </p>
            <p>
              <strong>Mass:</strong> {people.mass} kg
            </p>
            <p>
              <strong>Hair Color:</strong> {people.hair_color}
            </p>
            <p>
              <strong>Skin Color:</strong> {people.skin_color}
            </p>
            <p>
              <strong>Eye Color:</strong> {people.eye_color}
            </p>
          </div>
        );
      }
      case EntityType.Films: {
        const film = entity as Film;
        return (
          <div>
            <p>
              <strong>Title:</strong> {film.title}
            </p>
            <p>
              <strong>Director:</strong> {film.director}
            </p>
            <p>
              <strong>Producer:</strong> {film.producer}
            </p>
            <p>
              <strong>Release Date:</strong> {film.release_date}
            </p>
            <p>
              <strong>Opening Crawl:</strong> {film.opening_crawl}
            </p>
          </div>
        );
      }
      case EntityType.Planets: {
        const planet = entity as Planet;
        return (
          <div>
            <p>
              <strong>Name:</strong> {planet.name}
            </p>
            <p>
              <strong>Diameter:</strong> {planet.diameter}
            </p>
            <p>
              <strong>Climate:</strong> {planet.climate}
            </p>
            <p>
              <strong>Gravity:</strong> {planet.gravity}
            </p>
            <p>
              <strong>Terrain:</strong> {planet.terrain}
            </p>
            <p>
              <strong>Surface Water:</strong> {planet.surface_water}
            </p>
            <p>
              <strong>Population:</strong> {planet.population}
            </p>
          </div>
        );
      }
      case EntityType.Starships: {
        const starship = entity as Starship;
        return (
          <div>
            <p>
              <strong>Name:</strong> {starship.name}
            </p>
            <p>
              <strong>Model:</strong> {starship.model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {starship.manufacturer}
            </p>
            <p>
              <strong>Cost in Credits:</strong> {starship.cost_in_credits}
            </p>
            <p>
              <strong>Length:</strong> {starship.length}
            </p>
            <p>
              <strong>Max Atmosphering Speed:</strong>{" "}
              {starship.max_atmosphering_speed}
            </p>
            <p>
              <strong>Crew:</strong> {starship.crew}
            </p>
            <p>
              <strong>Passengers:</strong> {starship.passengers}
            </p>
            <p>
              <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
            </p>
            <p>
              <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
            </p>
            <p>
              <strong>Consumables:</strong> {starship.consumables}
            </p>
          </div>
        );
      }
      case EntityType.Species: {
        const species = entity as Species;
        return (
          <div>
            <p>
              <strong>Name:</strong> {species.name}
            </p>
            <p>
              <strong>Classification:</strong> {species.classification}
            </p>
            <p>
              <strong>Designation:</strong> {species.designation}
            </p>
            <p>
              <strong>Average Height:</strong> {species.average_height}
            </p>
            <p>
              <strong>Skin Colors:</strong> {species.skin_colors}
            </p>
            <p>
              <strong>Hair Colors:</strong> {species.hair_colors}
            </p>
            <p>
              <strong>Eye Colors:</strong> {species.eye_colors}
            </p>
            <p>
              <strong>Average Lifespan:</strong> {species.average_lifespan}
            </p>
            <p>
              <strong>Language:</strong> {species.language}
            </p>
          </div>
        );
      }
      case EntityType.Vehicles: {
        const vehicle = entity as Vehicle;
        return (
          <div>
            <p>
              <strong>Name:</strong> {vehicle.name}
            </p>
            <p>
              <strong>Model:</strong> {vehicle.model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {vehicle.manufacturer}
            </p>
            <p>
              <strong>Cost in Credits:</strong> {vehicle.cost_in_credits}
            </p>
            <p>
              <strong>Length:</strong> {vehicle.length}
            </p>
            <p>
              <strong>Max Atmosphering Speed:</strong>{" "}
              {vehicle.max_atmosphering_speed}
            </p>
            <p>
              <strong>Crew:</strong> {vehicle.crew}
            </p>
            <p>
              <strong>Passengers:</strong> {vehicle.passengers}
            </p>
            <p>
              <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
            </p>
            <p>
              <strong>Consumables:</strong> {vehicle.consumables}
            </p>
          </div>
        );
      }
      default:
        return <div>Details not available for this entity type.</div>;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {singleEntity &&
          ("name" in singleEntity
            ? singleEntity.name
            : "title" in singleEntity
            ? singleEntity.title
            : "")}
      </h1>
      {singleEntity && renderEntityDetails(singleEntity, entityType)}
    </div>
  );
};

export default EntityDetails;
