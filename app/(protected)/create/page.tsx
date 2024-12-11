/* eslint-disable @next/next/no-img-element */
'use client';

import { useForm } from 'react-hook-form';

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};

const CreateProjectPage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  return (
    <div className='flex items-center gap-12 h-full justify-center'>
      <img src='/hacker.png' alt='hacker image' className='h-56 w-auto' />
    </div>
  );
};

export default CreateProjectPage;
