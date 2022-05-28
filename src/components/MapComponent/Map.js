import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89195.27599220225!2d-73.92725963115343!3d45.683900031220645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8d7d3b70c861b%3A0xfabe67a302e9227d!2sBlainville%2C%20QC!5e0!3m2!1sen!2sca!4v1653146597279!5m2!1sen!2sca"
        width="600"
        height="450"
       //  style="border:0;" ERROR
       style={{border:"1px solid black"}}
      >
      </iframe>
    </div>
  );
};

export default Map;
