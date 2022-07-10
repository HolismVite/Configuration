import { Browse as BrowseInput } from '@Form';
import { Browse } from '@Browse';

const card = (item) => {

    return <>
        <div
            dir='ltr'
            className="flex flex-row items-center gap-4 mb-4 "
        >
            <div>{item.name}</div>
        </div>
        <p
            dir='ltr'
            style={{ overflowWrap: 'anywhere' }}
        >{item.text}</p>
    </>
}

const BrowserDialog = () => {
    return <Browse
        entityType='ConfigItem'
        card={card}
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