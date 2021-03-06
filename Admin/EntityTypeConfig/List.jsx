import {
    List,
    Text,
} from '@List';
import UpsertEntityTypeConfig from './Upsert';
import ConfigType from '../ConfigType/Filter';
import ConfigTypeIcon from '../ConfigType/Icon';
import ConfigProperty from '../ConfigType/Property';

const filters = <>
    <Text
        column='ConfigItemName'
        placeholder='Config name'
    />
    <ConfigType />
</>

const headers = <>
    <th>Name</th>
    <th>Type</th>
    <th>Value</th>
</>

const row = (entity) => {
    return <>
        <td>{entity.configItemName}</td>
        <td>
            <ConfigTypeIcon
                type={entity.configTypeId}
            />
        </td>
        <td>
            <ConfigProperty
                type={entity.configTypeId}
                entity={entity}
                entityType='EntityTypeConfig'
            />
        </td>
    </>
}

const EntityTypeConfigs = ({ isSuperAdmin }) => {

    return <List
        title="Entity Type Configs"
        entityType='EntityTypeConfig'
        filters={filters}
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertEntityTypeConfig}
        hasDelete={isSuperAdmin}
    // hasEdit={true}
    />
}

export default EntityTypeConfigs;