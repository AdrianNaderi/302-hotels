import classes from "./ServiceSection.module.css";

const ServiceSection = (props) => {
  return (
    <>
      <div className={classes.component}>{props.children}</div>
    </>
  );
};

export default ServiceSection;
