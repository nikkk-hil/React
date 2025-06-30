export const useGithubInfo = async () => {
    const response = await fetch("https://api.github.com/users/nikkk-hil");
    return response.json();
}