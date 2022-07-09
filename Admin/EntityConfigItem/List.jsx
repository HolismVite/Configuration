import {
    List,
    Browse,
    Text
} from '@List'
import UpsertEntityConfigItem from './Upsert'

const filters = <>
    {/* <Browse
    /> */}
    <Text
        column='Something'
    />
</>

const headers = <>
    <th>Entity Type</th>
    <th>Key</th>
    <th>Type</th>
</>

const row = (item) => <>
    <td>{item.entityType}</td>
    <td>{item.key}</td>
    <td>{item.type}</td>
</>

const EntityConfigItems = ({ isSuperAdmin }) => {
    return <List
        title='Entity Config Items'
        entityType='EntityConfigItem'
        filters={filters}
        headers={headers}
        row={row}
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        create={isSuperAdmin && UpsertEntityConfigItem}
    />
}

export default EntityConfigItems