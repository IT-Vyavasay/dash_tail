'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
const BasicRadio = ({ links }) => {
  const obj = ['Top', 'Bottom', 'Start', 'End'];
  return (
    <>
      <RadioGroup defaultValue='right'>
        <RadioGroupItem value='right' id='r_1'>
          Right
        </RadioGroupItem>
        <RadioGroupItem value='Wrong' id='r_2'>
          Wrong
        </RadioGroupItem>
        {links &&
          links.map((link, index) => (
            <RadioGroupItem value={'right'} id={`r_${index}`} key={index}>
              <a
                key={index}
                href={link}
                className='btn btn-success m-2'
                download
              >
                {obj[index]}
              </a>
            </RadioGroupItem>
          ))}
      </RadioGroup>
    </>
  );
};

export default BasicRadio;
