import { Box, Button, Dropdown } from '@rocket.chat/fuselage';
import React, { ReactElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { parseColor } from '@react-stately/color';

import ColorPicker from './ColorPicker';

import { useDropdownVisibility } from '/client/sidebar/header/hooks/useDropdownVisibility';
import ColorSlider from './ColorSlider';
import ColorArea from './ColorArea';

type ColorTokenProps = {
	item: { name: string; token: string; color: string; isDark: boolean; rgb: string };
	position: number;
	disabled?: boolean;
};

const ColorToken = ({ item, position }: ColorTokenProps): ReactElement => {
	const reference = useRef(null);
	const target = useRef(null);

	const [color, setColor] = React.useState(parseColor(item.rgb).toFormat('hsba'));
	const [endColor, setEndColor] = React.useState(color);
	const [xChannel, yChannel, zChannel] = color.getColorChannels();

	const { isVisible, toggle } = useDropdownVisibility({ reference, target });

	const openColorPicker = (): void => toggle(true);
	const closeColorPicker = (): void => {
		setEndColor(parseColor(item.rgb).toFormat('hsba'));
		setColor(parseColor(item.rgb).toFormat('hsba'));
		toggle(false);
	};

	return (
		<>
			{isVisible &&
				createPortal(
					<Dropdown reference={reference} ref={target}>
						<Box pi='x8'>
							<Box fontSize='p2b' fontWeight='p2b' display='flex' justifyContent='center'>
								{item.name}
							</Box>
							<Box display='flex' justifyContent='center' flexDirection='column' mb='x8'>
								<ColorArea
									aria-labelledby='hsb-label-id-1'
									value={color}
									onChange={setColor}
									onChangeEnd={setEndColor}
									xChannel={xChannel}
									yChannel={yChannel}
								/>
								<ColorSlider channel={zChannel} value={color} onChange={setColor} onChangeEnd={setEndColor} />
							</Box>
							<Box>
								<Button mi='x2' onClick={closeColorPicker}>
									Cancel
								</Button>
								<Button mi='x2' primary>
									Apply
								</Button>
							</Box>
						</Box>
					</Dropdown>,
					document.body,
				)}

			<Box
				ref={reference}
				width='120px'
				height='120px'
				backgroundColor={endColor.toString('rgb')}
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
				flexShrink={0}
				m='x4'
				mis={position === 0 ? '0' : 'x4'}
				p='x8'
				fontSize='10px'
				color={item.isDark ? 'white' : 'black'}
				fontWeight='600'
				onClick={openColorPicker}
				style={{ cursor: 'pointer' }}
			>
				<Box>{item.name}</Box>
				<Box display='flex' justifyContent='space-between'>
					<Box>{endColor.toString('rgb')}</Box>
					<Box>{item.token}</Box>
				</Box>
			</Box>
		</>
	);
};

export default ColorToken;