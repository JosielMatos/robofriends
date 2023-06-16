import { Card } from "./Card";

interface Robot {
  id: number;
  name: string;
  email: string;
}

interface Robots {
  robots: Robot[];
}

export const CardsList = ({ robots }: Robots) => {
  return (
    <>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </>
  );
};
