import React from "react";
import PropTypes from "prop-types";
import { List, Input } from "./Filter.styled"

const Filter = ({ value, onChange }) => (
    <label>
        <List>
        Find contacts by name
        <Input input type="text" value={value} onChange={onChange} />
        </List>
    </label>
);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
export default Filter;
