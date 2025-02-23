import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center; // Added this line
`;

const Card = styled.div`
  background-color: #1c1c1c;
  border-radius: 12px;
  border: 1px solid #e1e1e1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 350px;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #e1e1e1;
  object-fit: cover;
`;

const Name = styled.h2`
  color: #2c3e50;
  margin: 0.5rem 0;
  font-size: 1.8rem;
`;

const Bio = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin: 1rem 0;
`;

const SkillsTitle = styled.h3`
  color: #2c3e50;
  margin: 1rem 0;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

function ProfileCard({ name, imageUrl, bio, skills }) {
    return (
        <Container>
            <Card>
                <ProfileImage src={imageUrl} alt={name} />
                <Name>{name}</Name>
                <Bio>{bio}</Bio>
                <SkillsTitle>Skills:</SkillsTitle>
                <SkillsList>
                    {skills.map((skill) => (
                        <SkillItem key={skill}>{skill}</SkillItem>
                    ))}
                </SkillsList>
            </Card>
        </Container>
    );
}

export default ProfileCard;