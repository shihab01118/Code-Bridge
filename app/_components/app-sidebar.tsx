'use client';

import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Bot, CreditCard, LayoutDashboard, Plus, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoIcon from '@/public/cb-logo.png';

const items = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Q&A', url: '/qa', icon: Bot },
  { title: 'Meetings', url: '/meetings', icon: Video },
  { title: 'Billing', url: '/billing', icon: CreditCard }
];

export const AppSidebar = () => {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Sidebar collapsible='icon' variant='floating'>
      <SidebarHeader>
        <div className='flex items-center gap-2.5'>
          <Image src={LogoIcon} alt='Logo Icon' width={28} height={28} />
          {open && (
            <h1 className='text-2xl font-bold text-primary/80'>CodeBridge</h1>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn({
                        '!bg-primary !text-white': pathname === item.url
                      })}
                    >
                      <item.icon className='' />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild>
                    <div>
                      <div
                        className={cn(
                          'rounded-sm border size-6 flex items-center justify-center text-sm  bg-white text-primary ',
                          {
                            'bg-primary text-white': true
                          }
                        )}
                      >
                        {project.name[8]}
                      </div>
                      <span>{project.name}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className='h-2' />
              {open && (
                <SidebarMenuItem>
                  <Link href='/create'>
                    <Button variant='outline' className='w-fit' size='sm'>
                      <Plus />
                      Create Project
                    </Button>
                  </Link>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

const projects = [
  { name: 'Project-1' },
  { name: 'Project-2' },
  { name: 'Project-3' },
  { name: 'Project-4' }
];
