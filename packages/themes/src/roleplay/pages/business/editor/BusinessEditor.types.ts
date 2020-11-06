import {BusinessDTO} from '@instinct-prj/interface-rp';

export interface BusinessEditorProps {
  onSubmit(business: BusinessDTO): void | Promise<void>;
}
