import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { IconBaseProps } from "react-icons"

interface SkillsItemsType {
  name: string,
  IconName: React.ComponentType<IconBaseProps>
}

export function SkillsItems({ name, IconName }: SkillsItemsType) {

  return (
    <span className="flex items-center"><IconName className="mr-2" /> {name}</span>
  )
}
