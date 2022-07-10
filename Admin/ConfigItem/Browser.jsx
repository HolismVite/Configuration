import { Browse as BrowseInput } from '@Form';
import { Browse } from '@Browse';

const headers = <>
    <th superAdmin>Key</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (item) => <>
    <td>{item.name}</td>
</>

const BrowserDialog = () => {
    return <Browse
        entityType='ConfigItem'
        headers={headers}
        row={row}
    />
}

const ConfigItemBrowser = () => {
    return <BrowseInput
        column={'ConfigItemId'}
        browser={BrowserDialog}
        placeholder='Config item'
        display={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
}

export default ConfigItemBrowser