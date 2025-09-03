import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h3 style={{
                textAlign: 'center',
                color: '#667eea',
                marginBottom: '40px'
            }}>
                <Welcome />
            </h3>
            
            
            <Greeting />

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    แนะนำตัว
                </h2>
                <UserCard />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f5f7ceff'
            }}>
                <h2 style={{ color: '#f3d916ff', marginBottom: '20px' }}>
                    Monday
                </h2>

                <p>
                    ทำการบ้านเรื่อง actionให้เสร็จ  ส่งภายในวันนี้เที่ยงคืน
                </p>
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f9d4e9ff'
            }}>
                <h2 style={{ color: '#ff23b6ff', marginBottom: '20px' }}>
                    Tuesdey
                </h2>

                <p>
                    เรียนวิชาROS2(วิชาเลือกที่เราเลือกเอง) และวิชาBIS
                </p>
                <p>
                    ทำงานค้างให้เสร็จ เรื่องการสร้างและควบคุมหุ่นยนต์ให้เคลื่อนที่ได้
                </p>
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#d8fbd8ff'
            }}>
                <h2 style={{ color: '#24ed09ff', marginBottom: '20px' }}>
                    Wednesday
                </h2>

                <p>
                    เรียนวิชา Back-End แต่งดคราส 
                </p>
                <p>
                    ไปดูหนังเรื่องดาบพิฆาตอสูร 
                </p>
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fae9cfff'
            }}>
                <h2 style={{ color: '#f78011ff', marginBottom: '20px' }}>
                    Thursday
                </h2>

                <p>
                    เรียนวิชาFront-End และวิชาAi
                </p>
                <p>
                    แย่งโต๊ะที่โรงอาหารกับฝูงซอมบี้ ในตอนพักเที่ยงให้ทัน
                </p>
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#dde8f8ff'
            }}>
                <h2 style={{ color: '#199fedff', marginBottom: '20px' }}>
                    Friday
                </h2>
                <p>
                    เรียนวิชาSA และวิชาDBA
                </p>
                <p>
                    ทบทวนสิ่งที่เรียน และฝึกทำโจทย์ตามที่อาจาร์ยบอกแนวข้อสอบ
                </p>
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f8e0fdff'
            }}>
                <h2 style={{ color: '#b70dceff', marginBottom: '20px' }}>
                    Saturday
                </h2>

                <p>
                    พักผ่อน 
                </p>
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f9dbdbff'
            }}>
                <h2 style={{ color: '#ec0606ff', marginBottom: '20px' }}>
                    Sundey
                </h2>

                <p>
                    ทบทวนบทเรียน 
                </p>
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Component with Logic
                </h2>
                <Clock />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h1 style={{ color: '#333', marginBottom: '20px' }}>
                    To Do List
                </h1>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;