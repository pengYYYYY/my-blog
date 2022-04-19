import{_ as s,c as n,o as a,a as l}from"./app.355e7a82.js";const e='{"title":"linux搭建环境","description":"","frontmatter":{},"headers":[{"level":2,"title":"系统配置","slug":"系统配置"},{"level":2,"title":"配置ssh","slug":"配置ssh"},{"level":2,"title":"本地config","slug":"本地config"},{"level":2,"title":"配置User","slug":"配置user"},{"level":2,"title":"node环境","slug":"node环境"},{"level":3,"title":"源码安装","slug":"源码安装"},{"level":3,"title":"yum安装","slug":"yum安装"},{"level":2,"title":"gcc升级","slug":"gcc升级"}],"relativePath":"backend/devops/linux.md"}',p={},o=[l('<h1 id="linux搭建环境" tabindex="-1">linux搭建环境 <a class="header-anchor" href="#linux搭建环境" aria-hidden="true">#</a></h1><h2 id="系统配置" tabindex="-1">系统配置 <a class="header-anchor" href="#系统配置" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">// 关闭防火墙 和禁止开机启动</span></span>\n<span class="line"><span style="color:#A6ACCD;">systemctl stop firewalld</span></span>\n<span class="line"><span style="color:#A6ACCD;">systemctl disable firewalld</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// 关闭selinux</span></span>\n<span class="line"><span style="color:#A6ACCD;">cat /etc/selinux/config</span></span>\n<span class="line"><span style="color:#A6ACCD;">SELINUX=disable</span></span>\n<span class="line"><span style="color:#A6ACCD;">getenforce</span></span>\n<span class="line"></span></code></pre></div><h2 id="配置ssh" tabindex="-1">配置ssh <a class="header-anchor" href="#配置ssh" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-copy-id -i id_rsa.pub user@publicNet IP</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">// pem公钥</span></span>\n<span class="line"><span style="color:#A6ACCD;">ssh-keygen -m PEM -t rsa -b 4096 -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> 需要用pem格式</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;"> 生成ssh：ssh-keygen -t rsa -C </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@example.com</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span></code></pre></div><h2 id="本地config" tabindex="-1">本地config <a class="header-anchor" href="#本地config" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">// .shh/config</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">Host tx1pengyue</span></span>\n<span class="line"><span style="color:#A6ACCD;">HostName 118.24.3.246</span></span>\n<span class="line"><span style="color:#A6ACCD;">User pengyue</span></span>\n<span class="line"><span style="color:#A6ACCD;">IdentitiesOnly yes</span></span>\n<span class="line"></span></code></pre></div><h2 id="配置user" tabindex="-1">配置User <a class="header-anchor" href="#配置user" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">添加用户：adduser </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser </span></span>\n<span class="line"><span style="color:#A6ACCD;">设置密码：passwd </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser</span></span>\n<span class="line"><span style="color:#A6ACCD;">创建分组：groupadd </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_groupName</span></span>\n<span class="line"><span style="color:#A6ACCD;">加入组：gpasswd -a </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_groupName</span></span>\n<span class="line"><span style="color:#A6ACCD;">移除组：gpasswd -d </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_groupName</span></span>\n<span class="line"><span style="color:#A6ACCD;">进入home文件分配权限：cd /home</span></span>\n<span class="line"><span style="color:#A6ACCD;">分配权限：chmod 777 -R </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_newUser</span></span>\n<span class="line"><span style="color:#A6ACCD;">权限介绍：4=可读 2=可写 1=可执行</span></span>\n<span class="line"><span style="color:#A6ACCD;">      7 7 7</span></span>\n<span class="line"><span style="color:#A6ACCD;">      第一个7 是 文件所有者的权限</span></span>\n<span class="line"><span style="color:#A6ACCD;">      第二个7 是 文件所属组的权限</span></span>\n<span class="line"><span style="color:#A6ACCD;">      第三个7 是 其他用户的权限</span></span>\n<span class="line"><span style="color:#A6ACCD;">      7 = 4+2+1 表示有可读可写可执行</span></span>\n<span class="line"><span style="color:#A6ACCD;">      6 = 4+2 表示有可读可写权限</span></span>\n<span class="line"><span style="color:#A6ACCD;">      5 = 4+1 表示有可读可执行</span></span>\n<span class="line"><span style="color:#A6ACCD;">修改用户权限为root: 修改/etc/passwd即可，把用户名的ID和ID组修改成0（不建议）</span></span>\n<span class="line"></span></code></pre></div><h2 id="node环境" tabindex="-1">node环境 <a class="header-anchor" href="#node环境" aria-hidden="true">#</a></h2><h3 id="源码安装" tabindex="-1">源码安装 <a class="header-anchor" href="#源码安装" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">wget http:// xxx node官网下载最新的源码包</span></span>\n<span class="line"><span style="color:#A6ACCD;">yum -y install gcc make gcc-c++ openssl-devel wget 下载各种编译器</span></span>\n<span class="line"><span style="color:#A6ACCD;">tar -xvf node-v8.9.1-linux-x64.tar.xz  解压</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> node-xxx </span></span>\n<span class="line"><span style="color:#A6ACCD;">./configure  启动配置</span></span>\n<span class="line"><span style="color:#A6ACCD;">make 编译 </span></span>\n<span class="line"><span style="color:#A6ACCD;">make install 安装</span></span>\n<span class="line"></span></code></pre></div><h3 id="yum安装" tabindex="-1">yum安装 <a class="header-anchor" href="#yum安装" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">nodesource官方 https://github.com/nodesource/distributions</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">步骤1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">curl --silent --location https://rpm.nodesource.com/setup_12.x </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo bash -</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">sudo yum -y install nodejs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">切换淘宝源</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npm.taobao.org</span></span>\n<span class="line"></span></code></pre></div><h2 id="gcc升级" tabindex="-1">gcc升级 <a class="header-anchor" href="#gcc升级" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y install centos-release-scl</span></span>\n<span class="line"><span style="color:#A6ACCD;">yum -y install devtoolset-7-gcc devtoolset-7-gcc-c++ devtoolset-7-binutils</span></span>\n<span class="line"><span style="color:#A6ACCD;">scl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> devtoolset-7 bash</span></span>\n<span class="line"><span style="color:#A6ACCD;">需要注意的是scl命令启用只是临时的，退出shell或重启就会恢复原系统gcc版本。</span></span>\n<span class="line"><span style="color:#A6ACCD;">如果要长期使用gcc 7.3的话：</span></span>\n<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source /opt/rh/devtoolset-7/enable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;">/etc/profile</span></span>\n<span class="line"></span></code></pre></div>',16)];var c=s(p,[["render",function(s,l,e,p,c,r){return a(),n("div",null,o)}]]);export{e as __pageData,c as default};
