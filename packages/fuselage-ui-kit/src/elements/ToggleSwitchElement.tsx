import { Box, ToggleSwitch } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import type { ReactElement } from 'react';

import { useUiKitState } from '../hooks/useUiKitState';
import type { BlockProps } from '../utils/BlockProps';

type ToggleSwitchElementProps = BlockProps<UiKit.ToggleSwitchElement>;

const ToggleSwitchElement = ({
  block,
  context,
  surfaceRenderer,
}: ToggleSwitchElementProps): ReactElement => {
  const [{ loading }, action] = useUiKitState(block, context);
  const { options, initialOptions } = block;

  return (
    <form>
      {options.map((option: UiKit.Option) => {
        const isChecked = initialOptions?.some(
          (initialOption) => initialOption.value === option.value
        );

        return (
          <Box key={option.value} pb='x4'>
            <ToggleSwitch
              disabled={loading}
              checked={isChecked}
              onChange={action}
            />
            <Box is='label' pis='x8'>
              {surfaceRenderer.renderTextObject(
                option.text,
                0,
                UiKit.BlockContext.NONE
              )}
            </Box>
          </Box>
        );
      })}
    </form>
  );
};

export default ToggleSwitchElement;
