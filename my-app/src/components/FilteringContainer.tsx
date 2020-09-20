import React from 'react';
import './ClubContainer.css'
import {useRecoilState, useRecoilValue} from "recoil";
import {searchState} from "../recoil/atom";
import {searchSelector} from "../recoil/selectors";


interface FilteringContainerProps {
}

const FilteringContainer: React.FC<FilteringContainerProps> = ({
}) => {

    const [searchQuery, setSearchQuery] = useRecoilState(searchState);
    let value = useRecoilValue(searchSelector);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.currentTarget.value);
    };

    return (
        <div>
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i className="fas fa-search" aria-hidden="true" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={"Search by name..."}
                       aria-label="Search" onChange={handleChange}/>
            </form>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Default checkbox
                    </label>
                </input>
            </div>
        </div>
    );
};

export default FilteringContainer
