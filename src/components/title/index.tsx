import React from 'react';

interface IndexProps {
    title: string;
    desc?: string;
    gradient?: Record<string, string>;
    commonGradient?: string;
    textGradient?: string[];
    breakAfterWords?: string[];
    position?: string;
}

export default function TitleSection({
    title,
    desc,
    gradient,
    commonGradient,
    textGradient = [],
    breakAfterWords,
    position = 'start',
    ...props
}: IndexProps) {
    const joinAdjacentWords = (words: string[], targetWord: string): string[] => {
        const result: string[] = [];
        for (let i = 0; i < words.length; i++) {
            if (words[i] === targetWord && i < words.length - 1) {
                const joinedWord = `${words[i]} ${words[i + 1]}`;
                result.push(joinedWord);
                i++;
            } else {
                result.push(words[i]);
            }
        }
        return result;
    };


    const check = textGradient[0].split(' ')

    const words = check.length > 1 ? joinAdjacentWords(title.split(' '), textGradient[0].split(' ')[0]) : title.split(' ')
    const wordsDesc = desc?.split(' ');

    return (
        <div className={`flex flex-col flex-nowrap gap-4 text-${position}`}>
            <h1 className='capitalize text-neutral-800 dark:text-neutral-100 font-semibold md:text-[32px] sm:text-2xl text-xl md:leading-normal sm:leading-normal leading-normal' data-aos='fade-up' data-aos-duration='500'>
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={`
                            ${gradient && gradient[word] ? gradient[word] : ''}
                            ${textGradient && textGradient.includes(word) ? 'bg-clip-text text-transparent' : ''}
                            ${commonGradient && textGradient && !textGradient.includes(word) ? '' : commonGradient}
                        `}
                    >
                        {word} {breakAfterWords && breakAfterWords.includes(word) && <br />}
                    </span>
                ))}
            </h1>

            <p className='dark:text-neutral-200 text-neutral-700 text-sm sm:text-base' data-aos='fade-up' data-aos-duration='1000'>
                {wordsDesc?.map((item, index) => (
                    <span key={index}>
                        {item} {breakAfterWords && breakAfterWords.includes(item) && <br />}
                    </span>
                ))}
            </p>
        </div>
    );
}
