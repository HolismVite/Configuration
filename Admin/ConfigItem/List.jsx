import {
    List,
    Text
} from '@List'
import UpsertConfigItem from './Upsert'

const headers = <>
    <th>Key</th>
    <th>Type</th>
</>

const row = (item) => <>
    <td>{item.key}</td>
    <td>{item.type}</td>
</>

const ConfigItems = ({ isSuperAdmin }) => {
    return <List
        title='Config Items'
        entityType='ConfigItem'
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertConfigItem}
    />
}

export default ConfigItems