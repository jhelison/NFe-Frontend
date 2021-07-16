import React from 'react'

import Content from '../../components/template/Content'
import CustomButton from '../../components/CustomButton'

import CompanyItem from './CompanyItem';

import { FiPlus } from "react-icons/fi";

const CompanyList = (props) => {
    return (
        <Content title="Listagem de empresas">
            <div className="d-flex align-items-center just-content-space-bet mb-10">
                <h2>Empresas cadastradas</h2>
                <CustomButton sucess title="Nova empresa" icon={<FiPlus/>}/>
            </div>
            <div className="company-list-container">
            </div>
        </Content>
    )
}

export default CompanyList