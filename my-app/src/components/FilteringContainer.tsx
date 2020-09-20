import React from 'react';
import './ClubContainer.css'
import {useRecoilState} from "recoil";
import {acceptMembersState, openToCollabState, searchState} from "../recoil/atom";

interface FilteringContainerProps {
}

const FilteringContainer: React.FC<FilteringContainerProps> = ({
}) => {

    const [searchQuery, setSearchQuery] = useRecoilState(searchState);
    const [openToCollab, setOpenToCollab] = useRecoilState(openToCollabState);
    const [acceptMembers, setAcceptMembers] = useRecoilState(acceptMembersState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.currentTarget.value);
    };

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
       setOpenToCollab(event.target.checked);
    };

    const handleAccept = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAcceptMembers(event.target.checked);
    };

    return (
        <div className={"col-2"}>
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0 search">
                <i className="fas fa-search" aria-hidden="true" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={"Search"}
                       aria-label="Search" onChange={handleChange}/>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={handleCheck}/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Open to Help
                    </label>
                </div>
                {/*<div className="form-check">*/}
                {/*    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={handleAccept}/>*/}
                {/*    <label className="form-check-label" htmlFor="defaultCheck1">*/}
                {/*       Business*/}
                {/*    </label>*/}
                {/*</div>*/}
            </form>
        </div>
    );
};

export default FilteringContainer
