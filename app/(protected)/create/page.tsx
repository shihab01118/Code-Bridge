/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};

const CreateProjectPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    window.alert(JSON.stringify(data));
  };

  return (
    <div className='flex items-center gap-2 h-full justify-center'>
      <img src='/hacker.png' alt='hacker image' className='h-56 w-auto' />
      <div>
        <div>
          <h1 className='font-semibold text-2xl'>
            Link your GitHub repository
          </h1>
          <p className='text-sm text-muted-foreground mt-2'>
            Enter the URL of your repository to link it to CodeBridge
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <div className='grid gap-y-2'>
              <div>
                {' '}
                <Input
                  {...register('projectName', { required: true })}
                  placeholder='Project Name'
                />
                {errors.projectName && (
                  <span className='text-red-500 text-sm'>
                    Project name is required
                  </span>
                )}
              </div>
              <div>
                <Input
                  type='url'
                  {...register('repoUrl', { required: true })}
                  placeholder='GitHub Repository URL'
                />
                {errors.repoUrl && (
                  <span className='text-red-500 text-sm'>
                    GitHub url is required
                  </span>
                )}
              </div>
              <div>
                <Input
                  {...register('githubToken')}
                  placeholder='GitHub Token (Optional)'
                />
              </div>
            </div>
            <Button type='submit' className='mt-4'>
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
