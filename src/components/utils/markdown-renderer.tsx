"use client";

import React from 'react';

interface MarkdownRendererProps {
    blog: any;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ blog, ...rest }) => {

    const getContentFragment = (index: any, text: any, obj: any, type: any) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
            if (obj.italic) {
                modifiedText = (<i key={index}>{text}</i>);
            }
        }

        switch (type) {
            case 'heading-one':
                return (
                    <h1 key={index} className="text-2xl lg:text-4xl font-semibold mb-8">
                        {modifiedText}
                    </h1>
                );
            case 'heading-two':
                return (
                    <h2 key={index} className="text-xl font-semibold my-4 mt-8">
                        {modifiedText}
                    </h2>
                );
            case 'heading-four':
                return (
                    <h4 key={index} className='text-xl font-semibold mb-4 mt-8'>
                        {modifiedText}
                    </h4>
                );
            case 'bulleted-list':
                return (
                    <ul key={index} className="list-disc pl-4 mb-4">
                        {modifiedText}
                    </ul>
                );
            case 'list-item':
                return (
                    <li key={index} className="mb-2">
                        {modifiedText}
                    </li>
                );
            case 'list-item-child':
                return (
                    <li key={index} className="mb-2">
                        {modifiedText}
                    </li>
                );
            case 'paragraph':
                return (
                    <p key={index} className="font-medium my-4">
                        {modifiedText}
                    </p>
                );
            case 'code-block':
                return (
                    <code key={index} className='font-normal my-4 px-4 py-1 rounded-md'>
                        {modifiedText}
                    </code>
                );
            case 'code':
                return (
                    <code key={index} className='font-normal my-4 px-4 py-1 rounded-md font-mono'>
                        {modifiedText}
                    </code>
                );
            default:
                return modifiedText;
        }
    };


    return (
        <div className="mb-8 lg:py-8 lg:pb-16 w-full pb-12">
            <div className="px-4 lg:px-0 text-neutral-200">
                {blog?.content.raw.children?.map((typeObj: any, index: any) => {
                    const children = typeObj.children?.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, ''));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
            </div>
        </div>
    )
};

export default MarkdownRenderer;
