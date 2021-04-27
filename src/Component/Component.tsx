import React from "react";
import { Button } from "@material-ui/core";
import "./component.css";

interface ComponentProps {
  flag?: boolean;
}

export const Component: React.FC<ComponentProps> = () => (
  <div>
    <div className="button-container">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
    <div className="snd-container">
      <div>jmarceli-react-ts-library</div>
      <div>sample component</div>
      <div>rly?</div>
    </div>
  </div>
);
