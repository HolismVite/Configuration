import ConfigItems from './ConfigItem/List';
import EntityConfigItems from './EntityConfigItem/List';
import EntityConfigs from './EntityConfigs/List'
import EntityConfigsAction from './EntityConfigs/EntityAction';
import EntityTypeConfigs from './EntityTypeConfig/List'
import ManageEntityConfigs from './EntityConfigs/Manage';
import Settings from './Settings'
import SettingsIcon from '@mui/icons-material/Settings';
import SystemConfigs from './SystemConfig/List'

const ConfigurationRoutes = [
    {
        path: '/configItems',
        component: ConfigItems,
        superAdmin: true
    },
    {
        path: "/systemConfigs",
        component: SystemConfigs
    },
    {
        path: "/entityTypeConfigs",
        component: EntityTypeConfigs
    },
    {
        path: "/entityConfigItems",
        component: EntityConfigItems
    },
    {
        path: "/entityConfigs",
        component: EntityConfigs
    },
    {
        path: '/entityConfig',
        component: ManageEntityConfigs
    },
    {
        path: "/settings",
        component: Settings
    },
]

const ConfigurationMenu = [
    {
        title: "Configurations",
        "icon": SettingsIcon,
        children: [
            {
                title: "Config Items",
                url: "/configItems",
                superAdmin: true
            },
            {
                title: "System",
                url: "/systemConfigs"
            },
            {
                title: "Entity types",
                url: "/entityTypeConfigs"
            },
            {
                title: "Entity items",
                url: "/entityConfigItems"
            },
            {
                title: "Entities",
                url: "/entityConfigs"
            },
            {
                title: "Users",
                url: "/userConfigs"
            }
        ]
    }
]

export { ConfigItems }
export { ConfigurationMenu }
export { ConfigurationRoutes }
export { EntityConfigItems }
export { EntityConfigs }
export { EntityConfigsAction }
export { EntityTypeConfigs }
export { ManageEntityConfigs }
export { Settings }
export { SystemConfigs }