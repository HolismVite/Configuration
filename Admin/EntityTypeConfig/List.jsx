import {
    List,
    Text,
    Enum,
} from '@List'

const headers = <>
    <th>Entity type</th>
    <th>Config</th>
    <th>Value</th>
</>

const row = (item) => <>
    <td>{item.entityTypeKey}</td>
    <td>{item.configKey}</td>
    <td>{item.value}</td>
</>

const EntityTypeConfigs = () => {
    return <List
        title='Entity type configs'
        entityType='EntityTypeConfig'
        headers={headers}
        row={row}
    />
}

export default EntityTypeConfigs