import React from "react";
import { connect } from "react-redux";
import { setCatagoryAction } from "../Actions/action";

const Category: React.FC = (props: any) => {
  const { set_catagory, setCatagoryAction } = props;
  const active = "btn btn-outline-secondary active";
  const inactive = "btn btn-outline-secondary";
  const catagoryValues = [
    "All Items",
    "Electronics",
    "Men's Fashion",
    "Ladies Fashion",
    "kitchen Items",
    "beauty products",
  ];

  return (
    <div className="text-center">
      <div className="btn-group mt-3">
        {catagoryValues.map((values, index) => (
          <button
            key={index}
            type="button"
            className={set_catagory === values ? active : inactive}
            onClick={() => {
              setCatagoryAction(values);
            }}
          >
            {values}
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  set_catagory: state.CatagoryReducer.set_catagory,
});

export default connect(mapStateToProps, { setCatagoryAction })(Category);
